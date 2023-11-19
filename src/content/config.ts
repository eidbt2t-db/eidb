// @ts-ignore
import { defineCollection, z } from "astro:content";

// @ts-ignore
const showcase = defineCollection({
    schema: ({image}) =>
        z.object({
            title: z.string().min(1),
            image: image(),
            url: z.string().url(),
            featured: z.number().min(1).optional(),
        }),
    type: "data",
});

export const collections = {
  showcase,
};
