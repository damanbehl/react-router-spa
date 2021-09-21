import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { dummyQuotes } from "../pages/Quotes-main";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const params = useParams();
  const quote = dummyQuotes.find((quote) => quote.id === params.quoteId);
  let limeLight;
  if (quote) {
    limeLight = (
      <Fragment>
        <HighlightedQuote author={quote.author} text={quote.text} />
        <Route path="/quotes/:quoteId/comments">
          <Comments />
        </Route>
      </Fragment>
    );
  } else {
    limeLight = <NoQuotesFound />;
  }
  return <Fragment>{limeLight}</Fragment>;
};
export default QuoteDetails;
