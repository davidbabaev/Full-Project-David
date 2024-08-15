const questions = [
    {
        question: "מהי בירת ישראל?",
        answer: ["תל אביב", "ירושלים", "חיפה", "באר שבע"],
        correct: 2
    },
    {
        question: "מי היה ראש הממשלה הראשון של ישראל?",
        answer: ["דוד בן-גוריון", "גולדה מאיר", "מנחם בגין", "יצחק רבין"],
        correct: 1
    },
    {
        question: "באיזו שנה הוקמה מדינת ישראל?",
        answer: ["1947", "1948", "1949", "1950"],
        correct: 2
    },
    {
        question: "מהו הנהר הארוך ביותר בעולם?",
        answer: ["הנילוס", "האמזונס", "הדנובה", "הקונגו"],
        correct: 2
    },
    {
        question: "איזה כוכב לכת הקרוב ביותר לשמש?",
        answer: ["ונוס", "מאדים", "מרקורי", "יופיטר"],
        correct: 3
    },
    {
        question: "מי כתב את 'מלך האריות'?",
        answer: ["אדגר אלן פו", "שייקספיר", "ג'יי קיי רולינג", "המלט"],
        correct: 2
    },
    {
        question: "באיזה שנה הוקמה חברת גוגל?",
        answer: ["1998", "2000", "1995", "2005"],
        correct: 1
    },
    {
        question: "מהי בירת צרפת?",
        answer: ["מדריד", "ברלין", "פריז", "רומא"],
        correct: 3
    },
    {
        question: "מי המציא את הטלפון?",
        answer: ["אלברט איינשטיין", "תומאס אדיסון", "אלכסנדר גרהם בל", "הנרי פורד"],
        correct: 3
    },
    {
        question: "איזו מדינה היא הגדולה ביותר בעולם?",
        answer: ["ארצות הברית", "קנדה", "סין", "רוסיה"],
        correct: 4
    },
    {
        question: "מי צייר את 'מונה ליזה'?",
        answer: ["פבלו פיקאסו", "לאונרדו דה וינצ'י", "וינסנט ואן גוך", "קלוד מונה"],
        correct: 2
    },
    {
        question: "מהו ים המלח ידוע במיוחד?",
        answer: ["המליחות הגבוהה", "החופים היפים", "השוניות האלמוגים", "הגלים הגבוהים"],
        correct: 1
    },
    {
        question: "מי כתב את 'הארי פוטר'?",
        answer: ["טולקין", "ג'ורג' מרטין", "ג'יי קיי רולינג", "מרי שלי"],
        correct: 3
    },
    {
        question: "באיזה שנה נפל חומת ברלין?",
        answer: ["1987", "1989", "1991", "1993"],
        correct: 2
    },
    {
        question: "מי זכתה באירוויזיון עבור ישראל עם השיר 'Toy'?",
        answer: ["שירי מימון", "נטע ברזילי", "דנה אינטרנשיונל", "גאולה גיל"],
        correct: 2
    },
    {
        question: "מהי השפה המדוברת ביותר בעולם?",
        answer: ["אנגלית", "סינית מנדרינית", "ספרדית", "הינדית"],
        correct: 2
    },
    {
        question: "מי היה נשיא ארצות הברית בזמן מלחמת העולם השנייה?",
        answer: ["ג'ון פ. קנדי", "הרברט הובר", "פרנקלין ד. רוזוולט", "הארי טרומן"],
        correct: 3
    },
    {
        question: "מהו הפירות הלאומי של ישראל?",
        answer: ["תמר", "זית", "רימון", "תפוז"],
        correct: 3
    },
    {
        question: "מהו הנהר הגדול ביותר בישראל?",
        answer: ["הירדן", "הנחל באר שבע", "הכנרת", "הירקון"],
        correct: 1
    },
    {
        question: "איזה מדען פיתח את תורת היחסות?",
        answer: ["אייזק ניוטון", "ניקולה טסלה", "אלברט איינשטיין", "גלילאו גליליי"],
        correct: 3
    },
    {
        question: "איזה כוכב לכת ידוע בשם 'הכוכב האדום'?",
        answer: ["ונוס", "מאדים", "יופיטר", "שבתאי"],
        correct: 2
    },
    {
        question: "מי היה מלך ישראל הראשון?",
        answer: ["דוד", "שאול", "שלמה", "רחבעם"],
        correct: 2
    },
    {
        question: "מהו הפתגם 'טובה ציפור אחת ביד' אומר?",
        answer: ["עדיף משהו קטן בטוח מאשר משהו גדול לא בטוח", "עדיף להיות בחברת אנשים מאשר לבד", "כל דבר קטן חשוב", "עדיף לקחת סיכונים"],
        correct: 1
    },
    {
        question: "איזה כוכב לכת יש בו טבעות?",
        answer: ["מאדים", "יופיטר", "נפטון", "שבתאי"],
        correct: 4
    },
    {
        question: "מהי בירת איטליה?",
        answer: ["מילאנו", "פירנצה", "רומא", "ונציה"],
        correct: 3
    },
    {
        question: "מי כתב את 'מובי דיק'?",
        answer: ["צ'ארלס דיקנס", "הרמן מלוויל", "מארק טוויין", "ג'ק לונדון"],
        correct: 2
    },
    {
        question: "באיזה שנה נחתה האדם הראשון על הירח?",
        answer: ["1967", "1968", "1969", "1970"],
        correct: 3
    },
    {
        question: "מי המציא את מנוע הקיטור?",
        answer: ["ג'יימס וואט", "תומאס ניוקומן", "רוברט פולטון", "ג'ורג' סטיבנסון"],
        correct: 1
    },
    {
        question: "איזה מדינה מפורסמת במפלים שלה?",
        answer: ["שוויץ", "קנדה", "ברזיל", "סין"],
        correct: 2
    },
    {
        question: "מי המציא את האינטרנט?",
        answer: ["טים ברנרס-לי", "ביל גייטס", "סטיב ג'ובס", "לארי פייג'"],
        correct: 1
    },
    {
        question: "מהי בירת גרמניה?",
        answer: ["ברלין", "המבורג", "מינכן", "פרנקפורט"],
        correct: 1
    },
    {
        question: "מי היה הסופר שכתב את 'האלכימאי'?",
        answer: ["הרמן הסה", "פאולו קואלו", "גבריאל גרסיה מרקס", "חורחה לואיס בורחס"],
        correct: 2
    },
    {
        question: "מהו הכוכב הלכת הקטן ביותר במערכת השמש?",
        answer: ["מרקורי", "מאדים", "ונוס", "ארץ"],
        correct: 1
    },
    {
        question: "מי היה הפיזיקאי שפיתח את תורת הקוונטים?",
        answer: ["נילס בוהר", "אלברט איינשטיין", "מקס פלאנק", "ריצ'רד פיינמן"],
        correct: 3
    },
    {
        question: "איזה כוכב לכת יש לו את המספר הגדול ביותר של ירחים?",
        answer: ["שבתאי", "יופיטר", "נפטון", "אורנוס"],
        correct: 2
    },
    {
        question: "מהי השפה הרשמית של יפן?",
        answer: ["סינית", "קוריאנית", "יפנית", "אנגלית"],
        correct: 3
    },
    {
        question: "איזה כוכב לכת נמצא בין נוגה למאדים?",
        answer: ["מרקורי", "מאדים", "נוגה", "ארץ"],
        correct: 4
    },
    {
        question: "מהו הפלאי הטבעי הידוע בתור 'החומה הגדולה'?",
        answer: ["החומה הגדולה של סין", "הקשת של ארץ ישראל", "החומה של גרמניה", "החומה של ברלין"],
        correct: 1
    },
    {
        question: "מי היה הממציא של ה'מכונת התפירה'?",
        answer: ["אייזק סינגר", "תומאס אדיסון", "אלכסנדר גרהם בל", "הנרי פורד"],
        correct: 1
    },
    {
        question: "איזה מקום נחשב ל'מרכז הכדורסל' של ארצות הברית?",
        answer: ["ניו יורק", "לוס אנג'לס", "בוסטון", "שיקגו"],
        correct: 2
    },
    {
        question: "מהו הגובה של הר האוורסט?",
        answer: ["7,848 מטר", "8,848 מטר", "9,000 מטר", "8,500 מטר"],
        correct: 2
    },
    {
        question: "מי היה הממציא של רדיו?",
        answer: ["גוליילמו מרקוני", "אלברט איינשטין", "ניקולה טסלה", "תומאס אדיסון"],
        correct: 1
    },
    {
        question: "מהו הסופר הידוע ביצירת הסיפור 'הארי פוטר'?",
        answer: ["ג'יי קיי רולינג", "סטיבן קינג", "ג'ורג' ר.ר. מרטין", "טולקין"],
        correct: 1
    },
    {
        question: "איזה מדינה ידועה בשל פסטיבל הקרנבל שלה?",
        answer: ["ברזיל", "ארגנטינה", "קולומביה", "פרו"],
        correct: 1
    },
    {
        question: "מהו תאריך העצמאות של ארצות הברית?",
        answer: ["4 ביולי 1776", "1 בינואר 1776", "14 ביולי 1789", "4 ביולי 1789"],
        correct: 1
    },
    {
        question: "איזה שחקן גולף זכה באליפות המאסטרס יותר פעמים מכל שחקן אחר?",
        answer: ["פיל מיקלסון", "ג'ק ניקלאוס", "ארנולד פלמר", "טייגר וודס"],
        correct: 2
    },
    {
        question: "איזה דינוזואר היה בעל ה'ראש הגדול ביותר'?",
        answer: ["טריצרטופס", "טירנוזוארוס רקס", "סטגוזוארוס", "וולונרפטור"],
        correct: 2
    },
    {
        question: "מהו הים הגדול ביותר בעולם?",
        answer: ["הים התיכון", "הים האדום", "הים הצפוני", "הים האוקיינוס"],
        correct: 4
    },
    {
        question: "מי היה נשיא מצרים בזמן מלחמת ששת הימים?",
        answer: ["גמאל עבד אל-נאצר", "אנואר סאדאת", "חוסני מובארק", "מוחמד מורסי"],
        correct: 1
    },
    {
        question: "איזה פסטיבל מתרחש בהונג קונג בכל שנה?",
        answer: ["פסטיבל האורות", "פסטיבל הסרטים", "פסטיבל השוקולד", "פסטיבל הדלעת"],
        correct: 1
    },
    {
        question: "מהי הבירה של אוסטרליה?",
        answer: ["סידני", "מלבורן", "קנברה", "אדלייד"],
        correct: 3
    },
    {
        question: "איזה סופר כתב את 'השליחות'?",
        answer: ["יובל נח הררי", "אביהו מדינה", "דוד גרוסמן", "צ'אק פלאניוק"],
        correct: 3
    },
    {
        question: "מי היה מדען ידוע ב'פיזיקה תיאורטית'?",
        answer: ["פול דייוויד גרהם", "מקס פלאנק", "ליאון ברילואין", "ג'יימס קלרק מקסוול"],
        correct: 2
    },
    {
        question: "מהו שמו של הקוסם שמופיע בסיפור 'הקוסם מארץ עוץ'?",
        answer: ["הקוסם הגדול", "הקוסם הירוק", "הקוסם המוזהב", "הקוסם מהעץ"],
        correct: 1
    },
    {
        question: "מי כתב את הספר '1984'?",
        answer: ["אורסולה ק. לה גווין", "ג'ורג' אורוול", "א.א. מילן", "יוקיו מישימה"],
        correct: 2
    },
    {
        question: "מהו הפרי האדום המוכר כ'פרי הדומדמניות'?",
        answer: ["תפוח", "תות שדה", "פטל", "דומדמניות"],
        correct: 4
    }
]

const headerContainer = document.querySelector('#header')
const listContainer =  document.querySelector('#list')
const submitButton = document.querySelector('#submit')

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitButton.onclick = checkAnswer;

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion() {
    questions[questionIndex];

    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);

    headerContainer.innerHTML = title;
    
    let answerNumber = 1;
    for (answerText of questions[questionIndex]['answer']){
        
        const questionTemplate = 
        `
        <li>
        <label>
        <input value="%number%" type="radio" class="answer" name="answer" />
        <span>%answer%</span>
        </label>
		</li>
        `;
        
        const answerHTML = questionTemplate
            .replace('%answer%', answerText)
            .replace('%number%', answerNumber)

        listContainer.innerHTML += answerHTML;
        answerNumber++;
    }
    
}

function checkAnswer() {
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
    
    

    if(checkedRadio){
    } else {
        submitButton.blur();
        return
    }

    const userAnswer = parseInt(checkedRadio.value)

    console.log(userAnswer,questions[questionIndex]['correct'])
    if (userAnswer === questions[questionIndex]['correct']){
        score ++;
        
    }
    console.log('score', score);

    if (questionIndex !== questions.length - 1 ) {
        console.log('not last question');
        questionIndex++;
        clearPage();
        showQuestion();
    } else{
        console.log('last question');
        clearPage();
        showResults();
    }
}

function showResults() {
    console.log('show results');
    console.log(score);
    
    const resultsTemplate = 
    `
    <h2 class="title">%title%</h2>
    <h3 class="summary">%message%</h3>
    <p class="result">%result%</p>
    `;

    let title, message;
    if (score === questions.length) {
        title = 'כל הכבוד!🎉'
        message = 'ענית נכון על כל השאלות!🔥👌💯'
    } else if ((score * 100) / questions.length >= 50) {
        title = 'לא רע!'
        message = 'ענית נכון על יותר מ 50% מהשאלות🔥👌'
    } else {
        title = 'כדאי להשתדל יותר!🧐'
        message = 'בינתיים ענית לא נכון על יותר מ 50% מהשאלות!'
    }

    let result = `${score} מתוך ${questions.length}`

    const finalMessage = resultsTemplate
    .replace('%title%', title)
    .replace('%message%', message)
    .replace('%result%', result)

    headerContainer.innerHTML = finalMessage;

    submitButton.blur();
    submitButton.innerText = 'להתחיל מחדש'
    submitButton.onclick = function () {
        history.go();
    }
}

