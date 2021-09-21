import QuotesMain from "./pages/Quotes-main";
import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetails from "./pages/QuoteDetails";
import QuoteForm from "./components/quotes/QuoteForm";
import Layout from "./components/layout/Layout";

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
          <QuoteForm />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
