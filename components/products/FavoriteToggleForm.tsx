"use client";

import { toggleFavoriteAction } from "@/utils/actions";
import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;
