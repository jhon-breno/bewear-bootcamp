import z from "zod";

export const addProductToCartSchema = {
  productVariantId: z.uuid(),
  quantity: z.number().min(1),
};

export type AddProductToCartSchema = z.infer<typeof addProductToCartSchema>;
