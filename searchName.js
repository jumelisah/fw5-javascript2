const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia","Penelope"
]

function searching(key, arrNames){
    let arrSearch = []
    for(let i = 0; i < arrNames.length ; i++){
        let j = 0
        let k = 0
        let isThere = 0
        while(j<arrNames[i].length){
            if(arrNames[i][j]===key[k] || arrNames[i][j].toUpperCase()===key[k] || arrNames[i][j].toLowerCase()===key[k]){ //Melakukan pengecekan kecocokan dengan huruf ke-k dari kata kunci
                k++
                isThere++
            }else if(arrNames[i][j]!==key[k-1] && arrNames[i][j].toUpperCase()!==key[k-1] && arrNames[i][j].toLowerCase()!==key[k-1]){
                k = 0
                isThere = 0
            }
            j++
            if(isThere===key.length){
                arrSearch.push(arrNames[i])
                j = arrNames[i].length
            }
        }
    }
    return arrSearch
}

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

console.log(searchName("an", 3, searching))