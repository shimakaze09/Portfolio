import React from 'react'

type SectionHeaderProps = {
    children: React.ReactNode;
}

export default function SectionHeading({
    children
}: SectionHeaderProps) {
    return (
        <h2 className='text-3xl font-medium capitalize mb-8'>{children}</h2>
    )
}
