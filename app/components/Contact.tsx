"use client";

import { useI18n } from "@/lib/i18n/I18nContext";
import { SITE_CONFIG } from "@/lib/site-config";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  const { t } = useI18n();

  return (
    <AnimatedSection
      id="contact"
      className="bg-navy-800 py-20 text-white sm:py-28"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("contact.eyebrow")}
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-5 text-pretty text-lg text-navy-100">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-navy-900">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-navy-200">
                {t("contact.callLabel")}
              </p>
              <p className="font-serif text-xl text-white group-hover:text-accent">
                {SITE_CONFIG.phone}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-navy-900">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2 7 12 13 22 7" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-navy-200">
                {t("contact.emailLabel")}
              </p>
              <p className="font-serif text-xl text-white group-hover:text-accent break-all">
                {SITE_CONFIG.email}
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10 sm:col-span-2 lg:col-span-1"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-navy-900">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884a9.825 9.825 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-sm uppercase tracking-wider text-navy-200">
                {t("contact.whatsappLabel")}
              </p>
              <p className="font-serif text-xl text-white group-hover:text-accent">
                {SITE_CONFIG.phone}
              </p>
            </div>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
