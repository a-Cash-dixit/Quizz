//const url="https://script.googleusercontent.com/macros/echo?user_content_key=1G3xguPx-RkT6IBgnR5RJSxTrCbrzxe9TJ2Bw8mZ4FXZU925UosLC6Jk7UaQ7hOvYXzhj6MlJiLuG_md623ph2W6EszIrE0Lm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIEXBrz25RbCzTOXktsfUoogpcBnQJIyHf6rnO8hqS7e3p1w338SemSR0eoBNKoxhg8q7WhXIzvChAvcltxYpHShPDX2OmJg7Nz9Jw9Md8uu&lib=Mxz44T0qhmH_7T9NAokagUrhDJFvbzsoP";
// fetch(url).then(res=> res.json()).then(data => console.log(data.data));
const data = [
    {
        question: "Which type of tax is taken directly out of your paycheck??",
        correct: "Your intended date of graduation.",
        answers: [
            "What kind of grades you earn.",
            "Whether or not you pay your bills on time (your credit history).",
            "Your intended date of graduation.",
            "All of the above"
        ]
    },
    {
        question: "Which of the following is a risk to consider when investing?",
        correct: "Inflation",
        answers: [
            "You could lose all of your money",
            "Inflation",
            "Your money is not liquid",
            "All of the above"
        ]
    },
    {
        question: "In terms of size what position does the Indian economy occupy in the world?",
        correct: "12th",
        answers: [
            "10th",
            "12th",
            "7th",
            "9th "
        ]
    },
    {
        question: "Which industry provides the largest employment in India?",
        correct: "Textiles",
        answers: [
            "Orenge",
            "Textiles",
            "Iron and steel",
            "Jute"
        ]
    },
    {
        question: "The Finance Minister Nirmala Sitharaman has launched which app?",
        correct: "Union Budget Mobile App",
        answers: [
            "Pay Commission Mobile App",
            "National Budget App",
            "Union Budget Mobile App",
            "Budget App"
        ]
    },
    {
        question: "The State Bank of India allocated how much amount towards the fight against Covid 19?",
        correct: "Rs.71 cr",
        answers: [
            "Rs.70 cr",
            "Rs.92 cr",
            "Rs.71 cr",
            " Rs.60 cr"
        ]
    },
    {
        question: "Which of the following organisation has introduced the flagship initiative Liberalised MSME AEO Package scheme?",
        correct: "CBIC",
        answers: [
            "CBIC",
            "ONGC",
            "Niti Aayog",
            "Ministry of Planning"
        ]
    },
    {
        question: "Government aims to gradually increase the public health expenditure to what percent of Gross Domestic Product by 2025?",
        correct: 0.025,
        answers: [
            0.015,
            0.035,
            0.045,
            0.025
        ]
    },
    {
        question: "Government aims to gradually increase the public health expenditure to what percent of Gross Domestic Product by 2025?",
        correct: 0.025,
        answers: [
            0.015,
            0.035,
            0.045,
            0.025
        ]
    },
    {
        question: "Who has been appointed as the 1st chairman of the International Financial Services Centre Authority for a 3 years term?",
        correct: "Injeti Srinivas",
        answers: [
            "Injeti Srinivas",
            "Sumanta Chaudhury",
            "Anant Narayan Nanda",
            "Arun Goel"
        ]
    },
    {
        question: "Who is the current US president",
        correct: "Biden",
        answers: [
            "Obama",
            "Bush",
            "Biden",
            "Trumph"
        ]
    },
    {
        question: "Which of the following is a Tech Stack",
        correct: "MERN",
        answers: [
            "MEAN",
            "MERN",
            "MYIO",
            "None of the above"
        ]
    },
    {
        question: "PM of india",
        correct: "Narendra modi",
        answers: [
            "Narendra modi",
            "Manmohan Singh",
            "Ram Nath Kovind",
            "Yogi Aditya Nath"
        ]
    }
]
data.map((ele)=>{
    let i=ele.answers.indexOf(ele.correct)+1;
    ele.correct=i;
    return ele;
})
var indices=new Set();
while(indices.size < 10){
    indices.add(Math.floor(Math.random()*13));
}

var questions=[];
indices.forEach((i)=>{
    questions.push(data[i]);
})
export default questions;