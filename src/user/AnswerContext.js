// import React, { createContext, useContext, useState } from "react";

// const AnswerContext = createContext();

// export const useAnswerContext = () => {
//   return useContext(AnswerContext);
// };

// export const AnswerProvider = ({ children }) => {
//   const [answers, setAnswers] = useState({});

//   const updateAnswer = (questionId, index, value) => {
//     setAnswers(prev => ({ ...prev, [`${questionId}_${index}`]: value }));
//   };

//   return (
//     <AnswerContext.Provider value={{ answers, updateAnswer }}>
//       {children}
//     </AnswerContext.Provider>
//   );
// };
// // 