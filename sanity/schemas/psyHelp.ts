import { defineField, defineType } from "sanity";

export default defineType({
  name: "psyHelp",
  title: "PsyHelp",
  description: "Тип решаемой проблемы, например 'Депрессия'",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "imageWithAlt",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      options: {
        list: [1, 2, 3, 4, 5, 6],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});
