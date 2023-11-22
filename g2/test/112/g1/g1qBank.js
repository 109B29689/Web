// array('question' => '', 'options' => [], 'answer' => '')
var questionDict = {
  '簡單': {
    '動物': [
      { 'question': '請選擇符合狗的圖片', 'options': ['dog'], 'answer': 'dog' },
      { 'question': '請選擇符合貓的圖片', 'options': ['cat'], 'answer': 'cat' },
      { 'question': '請選擇符合麻雀的圖片', 'options': ['sparrow'], 'answer': 'sparrow' },
      { 'question': '請選擇符合鴿子的圖', 'options': ['pigeon'], 'answer': 'pigeon' },
      { 'question': '請選擇符合松鼠的圖片', 'options': ['squirrel'], 'answer': 'squirrel' }
    ],
    '數學': [
      { 'question': '1+1=', 'options': ['2'], 'answer': '2' },
      { 'question': '2+4=', 'options': ['6'], 'answer': '6' },
      { 'question': '1*2=', 'options': ['2'], 'answer': '2' },
      { 'question': '5-2=', 'options': ['3'], 'answer': '3' },
      { 'question': '8/2=', 'options': ['4'], 'answer': '4' }
    ],
    '英文': [
      { 'question': 'c_t=貓', 'options': ['a'], 'answer': 'a' },
      { 'question': 'd_g=狗', 'options': ['o'], 'answer': 'o' },
      { 'question': 'p_g=豬', 'options': ['i'], 'answer': 'i' },
      { 'question': 'c_w=乳牛', 'options': ['o'], 'answer': 'o' },
      { 'question': 'f_x=狐狸', 'options': ['o'], 'answer': 'o' }
    ]
  },
  '中等': {
    '動物': [],
    '數學': [],
    '英文': []
  },
  '困難': {
    '動物': [],
    '數學': [],
    '英文': []
  }
};

var optionDict = {
  '動物': ['dog', 'cat', 'sparrow', 'pigeon', 'squirrel'],
  '數學': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  '英文': ['a', 'b', 'c', 'd', 'e', 'f', 'g']
};

var levelDict = {
  '簡單': 3,
  '中等': 5,
  '困難': 7
};

var imgNum = 10;

// 隨機填充選項(options陣列)
function getRandomOptions(optionsBefore, optionAmount, optionBank) {
  var randomOptions = optionsBefore.slice();

  while (randomOptions.length < optionAmount) {
    var optionIndex = Math.floor(Math.random() * optionBank.length);
    var option = optionBank[optionIndex];

    if (randomOptions.indexOf(option) === -1) randomOptions.push(option);
  }

  return randomOptions;
}

// 隨機選項
function shuffleArray(dict) {
  var array = dict.options || '';
  var audio = dict.audio || '';

  for (var n = Math.floor(Math.random() * (array.length + 1)) + 2; n > 0; n--) {
    var i = Math.floor(Math.random() * array.length);
    var j = Math.floor(Math.random() * array.length);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    if (audio !== '') {
      temp = audio[i];
      audio[i] = audio[j];
      audio[j] = temp;
    }
  }

  dict.options = array;
  if (audio !== '') dict.audio = audio;

  return dict;
}

// 隨機抽題
function getRandomQuestion(questionBank) {
  var questions = [];

  while (questionBank.length > 0) {
    var randomIndex = Math.floor(Math.random() * questionBank.length);
    var temp = questionBank[randomIndex];
    questionBank.splice(randomIndex, 1);
    var shuffledDict = shuffleArray(temp);

    temp.options = shuffledDict.options;

    var audio = shuffledDict.audio || '';
    if (audio !== '') temp.audio = audio;

    questions.push(temp);
  }

  return questions;
}

function postData(theme, difficulty) {
  var userTheme = theme; // 主題
  var userdifficulty = difficulty; // 難度

  var questionBank = questionDict[userdifficulty][userTheme] || ''; // 符合所選難度與主題的題庫
  var optionBank = optionDict[userTheme] || ''; // 符合主題的選項庫
  var optionAmount = levelDict[userdifficulty] || ''; // 有n個選項

  if (questionBank !== '' || optionBank !== '' || optionAmount !== '') {
    // 依序每題 填滿每個問題的 options 陣列
    questionBank.forEach(function (question) {
      var randomOptions = getRandomOptions(question.options, optionAmount, optionBank);

      // 選項為圖片
      if (userTheme === '動物') {
        question.audio = randomOptions;

        var temp = [];
        randomOptions.forEach(function (i) {
          var option = i + Math.floor(Math.random() * imgNum + 1) + '.jpg';

          if (i === question.answer) {
            question.answer = option;
          }

          temp.push(option);
        });

        randomOptions = temp;
      }

      question.options = randomOptions;
    });

    // 隨機打亂題目
    questionBank = getRandomQuestion(questionBank);
  }

  return questionBank;
}
