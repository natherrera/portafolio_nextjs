'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  reset,
}: {
  reset?: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        {reset && (
            <button onClick={() => reset()}>Try again</button>
        )}
      </body>
    </html>
  )
}