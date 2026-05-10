import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg text-gray-900">JoyPin</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#starter-kit" className="hover:text-indigo-600 transition-colors">Starter Kit</a>
            <a href="#why-us" className="hover:text-indigo-600 transition-colors">Why Us</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
          </nav>
          <a
            href="#contact"
            className="bg-indigo-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              HR Consulting for Startups
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Build Your HR <br />
              <span className="text-indigo-600">Foundation Right</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              JoyPin helps HR startup companies launch faster with expert consulting and our proven <strong>HR Starter Kit</strong> — everything you need to go from zero to operational.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#starter-kit"
                className="bg-indigo-600 text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Get the Starter Kit →
              </a>
              <a
                href="#services"
                className="border border-gray-300 text-gray-700 text-base font-semibold px-8 py-4 rounded-xl hover:border-indigo-400 hover:text-indigo-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="text-green-500">✓</span> No long-term contracts
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-500">✓</span> Startup-friendly pricing
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-500">✓</span> Expert guidance
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">📦</div>
                  <div>
                    <div className="font-bold text-gray-900">HR Starter Kit</div>
                    <div className="text-sm text-gray-500">Complete HR package</div>
                  </div>
                  <div className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">POPULAR</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    'Employee Handbook Template',
                    'Job Description Library (50+)',
                    'Onboarding Checklist',
                    'Performance Review Forms',
                    'HR Policy Templates',
                    'Compensation Structure Guide',
                    '1-on-1 Strategy Session',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-6 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-gray-900">$497</div>
                    <div className="text-sm text-gray-500">one-time payment</div>
                  </div>
                  <a
                    href="#contact"
                    className="bg-indigo-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full opacity-40 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '150+', label: 'Startups Served' },
            { number: '8+', label: 'Years Experience' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'HR Templates' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold mb-1">{stat.number}</div>
              <div className="text-indigo-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From day one to scale — JoyPin covers every HR function your startup needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏗️',
                title: 'HR Infrastructure Setup',
                desc: 'Build your HR foundation from scratch: policies, processes, and systems tailored for early-stage startups.',
              },
              {
                icon: '📋',
                title: 'Recruitment Strategy',
                desc: 'Define hiring pipelines, craft compelling job descriptions, and implement structured interview frameworks.',
              },
              {
                icon: '🎓',
                title: 'Onboarding Design',
                desc: 'Create seamless onboarding experiences that get new hires productive and engaged from day one.',
              },
              {
                icon: '📊',
                title: 'Performance Management',
                desc: 'Implement fair and motivating performance review cycles, OKRs, and feedback culture frameworks.',
              },
              {
                icon: '💰',
                title: 'Compensation & Benefits',
                desc: 'Design competitive, equitable compensation structures and benefits packages that attract top talent.',
              },
              {
                icon: '⚖️',
                title: 'HR Compliance',
                desc: 'Navigate labor laws, employment regulations, and compliance requirements with confidence.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-indigo-100 transition-all group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starter Kit Deep Dive */}
      <section id="starter-kit" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              ⭐ Hook Product
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">HR Starter Kit</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The complete toolkit for HR startup founders who want to build a professional people operation in weeks, not months.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                {
                  icon: '📄',
                  title: 'Employee Handbook Template',
                  desc: 'A fully customizable handbook covering policies, culture, benefits, and code of conduct.',
                },
                {
                  icon: '💼',
                  title: 'Job Description Library (50+ roles)',
                  desc: 'Ready-to-use JDs for tech, ops, sales, and support roles — just add your company details.',
                },
                {
                  icon: '✅',
                  title: 'Onboarding Checklist System',
                  desc: 'Day 1, Week 1, and 30/60/90 day plans to set every new hire up for success.',
                },
                {
                  icon: '📈',
                  title: 'Performance Review Pack',
                  desc: 'Self-review, peer review, and manager review templates with scoring rubrics.',
                },
                {
                  icon: '📑',
                  title: 'HR Policy Templates',
                  desc: 'PTO, remote work, disciplinary, and 15+ more essential policies ready to customize.',
                },
                {
                  icon: '🎯',
                  title: '1-on-1 Strategy Session (60 min)',
                  desc: 'A live consultation with a JoyPin HR expert to tailor the kit to your specific needs.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl border-2 border-indigo-200 shadow-xl p-10">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-3">📦</div>
                  <h3 className="text-2xl font-extrabold text-gray-900">HR Starter Kit</h3>
                  <p className="text-gray-500 text-sm mt-1">Everything to launch your HR function</p>
                </div>
                <div className="text-center mb-8">
                  <div className="text-sm text-gray-400 line-through mb-1">$997</div>
                  <div className="text-5xl font-extrabold text-indigo-600">$497</div>
                  <div className="text-gray-500 text-sm">one-time · immediate access</div>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-700">
                  {[
                    'Employee Handbook Template',
                    '50+ Job Description Templates',
                    'Onboarding Checklist System',
                    'Performance Review Pack',
                    '15+ HR Policy Templates',
                    'Compensation Structure Guide',
                    '1-on-1 Strategy Session (60 min)',
                    'Lifetime updates',
                    'Priority email support (30 days)',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-indigo-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full text-center bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors text-lg shadow-lg shadow-indigo-200"
                >
                  Get the Starter Kit →
                </a>
                <p className="text-center text-xs text-gray-400 mt-4">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why JoyPin?</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We're not a big consulting firm. We're startup people who've built HR from zero — and now we help you do the same.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Startup-Native Thinking',
                desc: "We've built HR inside seed-stage to Series B companies. We know what scales and what's overkill.",
              },
              {
                icon: '⚡',
                title: 'Fast Time-to-Value',
                desc: 'Our Starter Kit gets you operational in days. No months-long engagements before you see results.',
              },
              {
                icon: '🤝',
                title: 'Practical Over Perfect',
                desc: "We give you 80% ready templates and real guidance — not theoretical frameworks you'll never implement.",
              },
              {
                icon: '💡',
                title: 'Ongoing Partnership',
                desc: "We don't disappear after delivery. We stay available as your HR challenges evolve.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "JoyPin's Starter Kit saved us months of work. We went from zero HR to a complete people operations setup in under two weeks.",
                name: 'Aditya Kurniawan',
                role: 'Co-founder, TechStartup ID',
              },
              {
                quote: "As a first-time founder with no HR background, this was exactly what I needed. The templates are practical, not just theoretical.",
                name: 'Sarah Wijaya',
                role: 'CEO, GrowFast Ventures',
              },
              {
                quote: "The 1-on-1 session alone was worth the price. Our HR consultant understood our stage and gave us a clear roadmap.",
                name: 'Budi Santoso',
                role: 'Head of People, ScaleUp.co',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Ready to Build Your HR Foundation?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Get the HR Starter Kit or book a free 15-minute discovery call to discuss your HR needs.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-5 text-left"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Company / Startup Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">I'm interested in</label>
                <select
                  name="interest"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                >
                  <option value="starter-kit">HR Starter Kit ($497)</option>
                  <option value="consulting">HR Consulting</option>
                  <option value="both">Both — tell me more</option>
                  <option value="discovery">Free 15-min Discovery Call</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message (optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your HR challenges..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors text-base shadow-lg shadow-indigo-200"
              >
                Send Message →
              </button>
              <p className="text-center text-xs text-gray-400">We'll respond within 24 hours · No spam, ever</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">J</span>
            </div>
            <span className="font-bold text-white">JoyPin</span>
          </div>
          <div className="text-sm text-center">
            HR Consulting &amp; Starter Kit for Startup Companies · <a href="https://joypin.site" className="text-indigo-400 hover:text-indigo-300">joypin.site</a>
          </div>
          <div className="text-sm">© 2026 JoyPin. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
