cannot scale icons

to create center: min: relative(vw, %), max: fixed (ch, rem)

```css
.footer {
  display: flex;
}

.columns {
  /* choose the right min size */
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

  flex-shrink: 0;
  /* otherwise will be squashed into columns */
  flex-grow: 1;
}

.copyright {
  align-self: flex-end;
}
```
