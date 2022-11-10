import React from "react";
import styled from "styled-components";

const Entry = styled.article`
  img {
    width: 12rem;
  }
`;

function CartTable({ items }) {
  // TODO: Map through “items”, creating 1 row
  // per item.

  return (
    <Entry>
      <table className="shopping-cart">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="cart-row">
              <td>
                <img
                  className="product-thumb"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
            </tr>
          ))}

          {/* <tr className="cart-row">
          <td>
            <img
              className="product-thumb"
              src={items[0].imageSrc}
              alt={items[0].imageAlt}
            />
          </td>
          <td>{items[0].title}</td>
          <td>${items[0].price}</td>
        </tr> */}
        </tbody>
      </table>
    </Entry>
  );
}

export default CartTable;
