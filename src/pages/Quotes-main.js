import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

export const dummyQuotes = [
  { id: "q1", author: "daman Behl", text: "hi this is daman" },
  { id: "q2", author: "Gagan", text: "hi this is gagan" },
  { id: "q3", author: "ashima Behl", text: "hi this is ashima" },
];

const QuotesMain = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default QuotesMain;
