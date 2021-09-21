import QuotesMain from "./pages/Quotes-main";
import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <QuotesMain />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
