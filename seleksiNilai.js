function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if(typeof nilaiAwal=="number" && typeof nilaiAkhir=="number"){
        if(nilaiAwal < nilaiAkhir){
            if(typeof dataArray==="object"){
                if(dataArray.length>=5){
                    let hasil = dataArray.filter(function(idx){return idx >= nilaiAwal && idx<= nilaiAkhir})
                    hasil.sort((a,b) => {return a-b})
                    return hasil
                }else{
                    return "Jumlah angka dalam dataArray harus lebih dari 5"
                }
            }else{
                return "Parameter ketiga harus berbentuk Array"
            }
        }else{
            return "Nilai akhir harus lebih besar dari nilai awal"
        }
    }else{
        return "Data harus number"
    }
}
let nilai = [2, 25, 4, 14, 17, 30, 8]
console.log(seleksiNilai(5, 20 , nilai))