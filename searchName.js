const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia","Penelope"
]

function searchName(keywords, dataMax, callback){
    let nameList = callback(keywords, name) // Memanggil fungsi callback
    let diff = 0
    if(dataMax<nameList.length){
        diff = nameList.length - dataMax
    }
    let i = 0
    while(i<diff){
        nameList.pop() //Mengurangi data dari index terakhir array
        i++
    }
    return nameList
}

function searching(key, arrNames){
    let arrSearch = []
    arrNames.forEach(element => {
        let j = 0
        let k = 0
        let isThere = 0
        while(j<element.length){
            if(element[j]===key[k] || element[j].toUpperCase()===key[k] || element[j].toLowerCase()===key[k]){ //Melakukan pengecekan kecocokan dengan huruf ke-k dari kata kunci
                k++
                isThere++
            }else if(element[j]!==key[k-1] && element[j].toUpperCase()!==key[k-1] && element[j].toLowerCase()!==key[k-1]){
                k = 0
                isThere = 0
            }
            j++
            if(isThere===key.length){
                arrSearch.push(element)
                j = element.length
            }
        }
    });
    return arrSearch
}

console.log(searchName("an", 3, searching))