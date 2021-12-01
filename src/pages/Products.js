import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  // const navigate = useNavigate();
  //navigate("/welcome"); to navigate, push new route
  // navigate("/welcome", { replace: true }); to redirect replace current route
  //navigate(-1); go back to previous page
  //navigate(-2) page before previous page
  //navigate(1) one to go forward again
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
