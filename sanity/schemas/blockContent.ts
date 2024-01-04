import {
  RiAccountPinBoxLine,
  RiBallPenFill,
  RiExternalLinkLine,
  RiLinksLine,
  RiSeparator,
  RiSuperscript2,
} from "react-icons/ri";
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H3', value: 'h2'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Highlight', value: 'highlight', icon: RiBallPenFill},
          {title: 'Superscript', value: 'superscript', icon: RiSuperscript2},
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'internal link.',
            icon: RiExternalLinkLine,
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'URL',
              },
              {
                name: 'title',
                type: 'string',
                title: 'Title',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          
        ],
      },
    }),
    defineArrayMember({
      type: 'imageWithAlt',
    }),
    defineArrayMember({
      title: 'Callout',
      type: 'object',
      name: 'callout',
      icon: RiAccountPinBoxLine,
      fields: [
        defineField({
          name: 'callout',
          type: 'string',
        }),
      ],
    }),
    defineArrayMember({
      name: 'break',
      type: 'object',
      title: 'Divider',
      icon: RiSeparator,
      fields: [
        defineField({
          name: 'break',
          type: 'boolean',
        }),
      ],
    }),
  ],
})
