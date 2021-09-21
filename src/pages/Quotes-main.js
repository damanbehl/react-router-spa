import QuoteList from "../components/quotes/QuoteList";

export const dummyQuotes = [
  { id: "q1", author: "daman Behl", text: "hi this is daman" },
  { id: "q2", author: "Gagan", text: "hi this is gagan" },
  { id: "q3", author: "ashima Behl", text: "hi this is ashima" },
];

const QuotesMain = () => {
  return <QuoteList quotes={dummyQuotes} />;
};

export default QuotesMain;
