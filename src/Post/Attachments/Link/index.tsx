import React from 'react'
// import studyflowImage from 'assets/images/icons/studyflow.svg'
import cn from 'classnames'
import { X } from '@styled-icons/boxicons-regular/X'
import style from 'Post/Attachments/Link/style.module.css'

type Props = {
  className?: string
  url?: string
  onClick?(): void
  image: React.ReactNode
  title: string
  text?: string
  onDelete?(): void
}

const LinkComponent = ({
  url,
  ...props
}: {
  url?: string
  onClick?(): void
  className?: string
  children: React.ReactNode
}) => {
  if (url) return <a href={url} target="_blank" {...props} />
  else return <button type="button" {...props} />
}

export default function Link({
  className,
  url,
  onClick,
  image,
  title,
  text,
  onDelete,
}: Props) {
  // let image: string | undefined
  // if (link.type === 'link') image = link.image
  // else if (link.type === 'studyflow') image = studyflowImage

  return (
    <LinkComponent
      url={url}
      onClick={onClick}
      className={cn('bg-gray-f7 p-3 flex relative text-left', className)}
    >
      <div className="flex-shrink-0 mr-3">{image}</div>
      <div className="flex-grow flex flex-col justify-center">
        <div className={style.title}>{title}</div>
        {text && (
          <div className="font-bold text-sm text-gray-71 mt-1 whitespace-per-wrap">
            {text}
          </div>
        )}
      </div>
      {onDelete && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            onDelete()
          }}
          className="absolute right-0 bottom-0 p-2 text-gray-6b"
        >
          <X size={32} />
        </button>
      )}
    </LinkComponent>
  )
}