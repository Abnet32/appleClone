import { useEffect, useState } from "react";
import { Link } from "react-router";
import { axiosInstance } from "../../utils/axiosInstance";

function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // const getIphones = async () => {
    //   try {
    //     const res = await fetch("/iphone.json");
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data.products);
    //   } catch (error) {
    //     console.log("Error: unable to fetch: ", error);
    //   }
    // };

    const getIphones = async () => {
      const response = await axiosInstance("iphones");
      setProducts(response.data.products);
    };
    getIphones();
  }, []);
  console.log(products);
  let flip = true;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphones</h1>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
        </div>
      </section>
      {products?.map((singleProduct) => {
        let id = singleProduct.product_id;
        let name = singleProduct.product_name;
        let img = singleProduct.product_img;
        let Brief = singleProduct.product_brief_description;
        let StartPrice = singleProduct.starting_price;
        let PriceRange = singleProduct.price_range;
        let productPage = "/iphone/" + id;
        let order1 = 1;
        let order2 = 2;
        if (flip) {
          order1 = 2;
          order2 = 1;
          flip = !flip;
        } else {
          flip = !flip;
        }

        return (
          <div
            key={id}
            className="row justify-content-center text-center product-holder h-100"
          >
            <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
              <div className="product-title">{name}</div>
              <div className="product-brief publish">{Brief}</div>
              <div className="starting-price publish">
                {`Starting at ${StartPrice}`}
              </div>
              <div className="monthly-price publish">{PriceRange}</div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <Link to={productPage}>Learn more</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`col-sm-12 col-md-6 order-${order2}`}>
              <div className="product-image">
                <img src={img} alt="product" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Iphone;
