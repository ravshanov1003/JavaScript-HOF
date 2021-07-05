// node filter.js
let text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quibusdam eos necessitatibus aut voluptas quam nisi, dolorum hic quis facilis cumque excepturi aliquam vitae, adipisci rerum earum quia tenetur suscipit pariatur similique amet unde ullam saepe illum! Maxime quaerat quisquam quas assumenda. Placeat sequi explicabo eum in molestiae exercitationem aliquid'
let textArr = text.split(" ")
    // filter by 7 words
let textBy7 = textArr.filter((val) => val.length >= 7).join(" ")
console.log(textBy7)

let word = ['Salom']
let newWord = word.filter((value) => {
        if (value == "o" && value == 'a') {
            return value
        }
    })
    // console.log(newWord);

// find arr[i]/3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let findBy3 = arr.filter((val) => val % 3 === 0)
    // console.log(findBy3)

// find tub
let tub = arr.filter((val) => val % val === 0)
    // console.log(tub)