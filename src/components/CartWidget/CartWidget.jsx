import "./CartWidget.css";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const totalQuantity = (1);

  return (
    <div className="d-flex flex-row">
      <Badge bg="secondary" className="mb-2">
        {totalQuantity}
      </Badge>
      <FontAwesomeIcon
        icon={faCartShopping}
        size="lg"
        className="text-secondary"
      />
    </div>
  );
};
export default CartWidget;