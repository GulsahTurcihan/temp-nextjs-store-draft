import { Input } from "../ui/input";
import { Label } from "../ui/label";

const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
        className="text-gray-500"
      ></Input>
    </div>
  );
}

export default PriceInput;
