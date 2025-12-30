// botoes de aumentar e diminuir quantidade iniciando com 1 e nao permitindo valor menor que 1
"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="space-y-4">
      <div className="flex-center flex w-25 items-center justify-between rounded-lg border">
        <Button
          size="icon"
          variant="ghost"
          disabled={quantity <= 1}
          onClick={() => setQuantity(quantity - 1)}
          className="border-none"
        >
          <MinusIcon />
        </Button>
        <p>{quantity}</p>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setQuantity(quantity + 1)}
          className="border-none"
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
