
// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "1 + e^i(x) = ?",
    answer: "2cos(x/2)e^i(x/2)",
    options: [
      "2sin(x)e^i(x/2)",
      "2cos(x)e^i(x/2)",
      "2cos(x/2)e^i(x/2)",
      "2cos(x/2)sin(X/2)e^i(x/2)"
    ]
  },
    {
    numb: 2,
    question: "cos(x) = ?",
    answer: "(e^ix + e^-ix)/2",
    options: [
      "(e^ix - e^ix)/2",
      "(e^ix + e^-ix)/2",
      "(e^ix + e^-ix)/2i",
      "1-sin(x)"
    ]
  },
    {
    numb: 3,
    question: "Sin(x) = ?",
    answer: "(e^ix - e^-ix)/2i",
    options: [
      "(e^ix - e^-ix)/2i",
      "(e^ix - e^ix)/2i",
      "(e^ix - e^-ix)/2",
      "(e^ix + e^-ix)/2i"
    ]
  },
    {
    numb: 4,
    question: "|4-4i| = ?",
    answer: "4√2",
    options: [
      "4",
      "4√2",
      "6√3",
      "2√4"
    ]
  },
    {
    numb: 5,
    question: "Pour tout x∈R, x^2 + 1 = 0 admet-il une solution ?",
    answer: "Non",
    options: [
      "Oui",
      "Ca depend de l'ensemble ou est prit x",
      "Non",
      "x = i"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];