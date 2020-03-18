export default function getMaxNumber(k=123) {
    let n = k.toString();
    let max = n[0];
    for(let i = 0;i<n.length;i++){
        if(n[i]>max){
            max = n[i];
        }
    }
    return max;
}