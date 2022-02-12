import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // This is a hack to make sure the theme is set before the component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="hover:bounceNew ml-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  )
}

export default ThemeSwitch
