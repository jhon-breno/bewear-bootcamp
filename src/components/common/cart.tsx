import { ShoppingBasketIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingBasketIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="p-4">Cart</div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
