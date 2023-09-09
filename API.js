let a = fetch("https://openlibrary.org/works/OL15626917W.json")
a.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log (value2)
})