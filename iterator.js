/**
 * 
 * @param {Array | String} arr 
 */
function iterator(arr) {
    let index = 0;
    return {
        next: () => {
            return (index < arr.length) ? arr[index++]: null;
        },
        getIndex: () => {
            return index;
        },
        hasNext: () => {
            return (index < arr.length) && (index >= 0);
        }
    }
}
/*
    Direct access to index is restricted.
    The usage is decribed below
*/

(function(){
    let a = [1, 2, 3];
    let itr = iterator(a);
    while(itr.hasNext()) {
        console.log(itr.next());
    }
}())

module.exports = iterator;