import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { clsx } from 'snowye-tools'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between gap-3 h-[82px]">
            <Image src="/static/images/snow.png" alt="" width={28} height={28} />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-12 leading-12 text-2xl font-semibold sm:block highlight highlight-blue-200 highlight-variant-6 dark:highlight-blue-500">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={clsx(
                'hidden font-medium text-gray-900 dark:text-gray-100 sm:block rounded-lg px-3 py-2 hover:bg-[#23272f1a] dark:hover:bg-[#ffffff60]'
              )}
            >
              {link.title}
            </Link>
          ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
