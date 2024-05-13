
interface Question {
  id: number;
  audioUrl: string;
  options: string[];
  correctAnswerIndex: number;
}

const questions: Question[] = [
  {
    id: 1,
    audioUrl: 'https://example.com/audio1.mp3',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    audioUrl: 'https://example.com/audio2.mp3',
    options: ['Option X', 'Option Y', 'Option Z', 'Option W'],
    correctAnswerIndex: 1,
  },

];

export const fetchQuestions = async (): Promise<Question[]> => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(questions);
    }, 1000);
  });
};

export const submitAnswer = async (questionId: number, selectedOptionIndex: number): Promise<boolean> => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const question = questions.find((q) => q.id === questionId);
      if (!question) {
        resolve(false); 
      } else {
        resolve(selectedOptionIndex === question.correctAnswerIndex);
      }
    }, 1000);
  });
};
