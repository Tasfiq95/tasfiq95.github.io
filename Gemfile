source "https://rubygems.org"

# Use the github-pages gem so your local build matches GitHub Pages exactly.
gem "github-pages", group: :jekyll_plugins

# Timezone data for Windows / JRuby (no native tzdb on these platforms)
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
