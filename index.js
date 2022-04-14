//               LEVEL 2

// <------ 1. ------>
    console.log(`The quote "There is no exercise better for the\ 
    heart than reaching down and lifting people up."\ 
    by John Holmes teaches us to help one another.`)


// <------ 2. ------>
    console.log("Love is not patronizing and charity isn't about pity,\
    it is about love. Charity and love are the same -- with \
    charity you give love, so don't just\
    give money but reach out your hand instead.")


// <------ 3. ------>
    var number = "10"
    console.log(number === 10) // Fasle
    // Convert string to number
    num = parseInt(number)
    console.log(num === 10) // True


// <------ 4. ------>
    let round = Math.ceil(parseFloat('9.8'))
    // Round 9.8 to 10 using Math.ceil() method
    console.log(round)

/*
    

    Use console.log() and escape characters to print the following pattern.

    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

// <------ 5. ------>
    var python =  "python";
    var jargon = "jargon";

    console.log(python.includes('on'))
    console.log(jargon.includes('on'))

// <------ 6. ------>
    var sentence = "I hope this course is not full of jargon. \
    Check if jargon is in the sentence.";
    console.log(sentence.includes("jargon"))

// <------ 7. ------>
    var randNum = Math.ceil(Math.random() * 100)

// <------ 8. ------> 
    var random = Math.floor(Math.random() * 51) + 50


// <----- 9. ------>
    var randNum = Math.ceil(Math.random() * 225) + 1
    console.log(randNum)


// <----- 10. ------>
    var string = 'JavaScript';
    var random = Math.random() * string.length
    console.log(string.charAt(random))

// <----- 12. ------>
    var statement = "You cannot end a sentence with because because because is a conjunction'"
    var slice = statement.substr(31,23)
    console.log(slice)





//               LEVEL 3

// <----- 1. ------>
    var sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 

    var arr = sentence.match(/love/gi)

    let numOfWordsLove = arr.length

    console.log(numOfWordsLove)

// <----- 2. ------>

    var sentence = 'You cannot end a sentence with because because because is a conjunction'
 
    var arr = sentence.match(/because/gi)

    let numOfWordsBecause = arr.length

    console.log(numOfWordsBecause)


// <----- 3. ------>
    

// <----- 4. ------> 

    var statement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

    var arrOfNumbers = statement.match(/\d+/g)

    let sum = 0;

    for (let i = 0; i < arrOfNumbers.length; i++) {
        sum += parseFloat(arrOfNumbers[i]);
    }
    console.log(sum)

    
