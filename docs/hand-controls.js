// Scale-normalized landmarks keep the pinch threshold independent of camera distance.
export function interpretHand(lm){
  const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  const palm=Math.max(.01,distance(lm[0],lm[9]));
  const pinch=distance(lm[4],lm[8])/palm<.34;
  let extended=0;
  for(const [tip,pip] of [[8,6],[12,10],[16,14],[20,18]]){
    if(distance(lm[tip],lm[0])>distance(lm[pip],lm[0])*1.15)extended++;
  }
  return {pinch,open:extended>=3,fist:extended===0&&!pinch,x:1-lm[8].x,y:lm[8].y,palm};
}
