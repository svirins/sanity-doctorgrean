import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  description: 'Статья в блоге',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'datePublished',
      title: 'Date published (or date scheduled to be published on)',
      type: 'date',
      options: {
        dateFormat: 'YYYY DD MM',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayAtFront',
      title: "Set to 'ON' to display post at front (up to 3 posts)",
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags (maximum 3)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'tag',
            },
          ],
        },
      ],
      validation: (Rule) =>Rule.required().max(3),
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          options: {
            disableNew: true,
          },
          to: [
            {
              type: 'post',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      date: 'datePublished'
    },
  },
})
