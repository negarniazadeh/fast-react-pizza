import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItem,
  getCurrentQuantityById,
  increaseItem,
} from "./cartSlice";

function UpdateItemQuantity({ currid }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(currid));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItem(currid))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItem(currid))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
