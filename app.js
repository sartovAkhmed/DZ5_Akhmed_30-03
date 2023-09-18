/* ⁃ Создать кнопку и навесить на него обработчик событий "click". 
При нажатии на эту кнопку должно появиться диалоговое окно ( promt() ), 
если что-либо ввести в диалоговое окно, то введённое значения должно отобразиться в HTML. 
При повторном нажатии должно происходить всё то же самое, но текст который был до этого должна поменяться. 
Если в диалоговое окно ничего не ввести, то должен появиться alert с error */
const button = document.querySelector('.btn')
const page = document.querySelector('.page')
button.onclick=()=>{
    const zapros = prompt()
    if(zapros){
        page.innerHTML = zapros
    }else{
        alert('ERROR')
        console.error(Error);
    }
}
/* ⁃ будет массив из разных типов данных, например [‘frontend’, 3, 34, 45, null, undefined, null, 45, ‘text’, ‘text’,  true, false,  23, null, ‘qwerty’, ’456’].
Вам надо одинаковые типы данных объединить в отдельные массивы, то есть в результате будет один массив, внутри которого еще массивы с одинаковыми типами данных.
После этого отсортируйте эти массивы от большего к меньшему, то есть в самом начале будет тот массив, в котором больше всего элементов.
Далее полученный массив отфильтруйте, выведите только те элементы, в которых больше 3 символов, подумайте хорошенько ;) */
const mixArray = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text',  true, false,  23, null, 'qwerty', '456']
const newArray = [];
for (let i in mixArray) {
    const item = mixArray[i];
    const itemType = typeof item;
    if (!newArray[itemType]) {
        newArray[itemType] = [];
    }
    newArray[itemType].push(item);
}
console.log(newArray);
const arrayValues = Object.values(newArray)
arrayValues.sort((n1, n2) => n2.length - n1.length)
console.log(arrayValues);
const endResultArray = []
for(let i in arrayValues){
    const items = arrayValues[i]
    const filteredArray = items.filter(item => {
        return typeof item !== 'number'
    })
    endResultArray.push(filteredArray)
}
console.log(endResultArray);