import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fr', 'ar', 'yo', 'sw'];
const defaultLocale = 'en';

// Create middleware with 'never' prefix - URLs stay clean
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'never',
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip i18n for API routes
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Skip i18n for static files
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/videos/') ||
    pathname === '/favicon.ico' ||
    pathname === '/logo.png'
  ) {
    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!_next/|api/|images/|videos/|favicon.ico|logo.png).*)'],
};
