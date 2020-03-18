export default function makePairs(names){
    const result =[];
    for (let i=1;i<names.length;i++) {
        if(i%2!==0){
            result.push(names.slice(i-1,i+1));
        }
    }
    return result;
}