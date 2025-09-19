import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Clock, Filter } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const trendingQueries = [
    "competitive analysis",
    "content creation",
    "data visualization",
    "market research",
    "social media automation",
  ];

  const recentQueries = [
    "Python automation",
    "Excel reporting",
    "SEO optimization",
  ];

  return (
    <section className="py-12 px-4 lg:px-8 border-b border-white/10">
      <div className="container mx-auto max-w-4xl">
        {/* Main Search Input */}
        <div className="relative mb-8">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="flex items-center p-4">
              <Search className={`h-6 w-6 mr-4 transition-colors duration-300 ${
                isSearchFocused ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <input
                type="text"
                placeholder="Search for 'competitive analysis' or 'content creation'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground text-lg focus:outline-none"
              />
              <Button variant="hero" size="lg" className="ml-4">
                Search
              </Button>
            </div>
          </div>

          {/* Auto-complete Dropdown */}
          {isSearchFocused && searchQuery.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-xl overflow-hidden z-50 animate-fade-in">
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Recent Searches
                  </h4>
                  <div className="space-y-2">
                    {recentQueries.map((query, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
                        onClick={() => setSearchQuery(query)}
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trending
                  </h4>
                  <div className="space-y-2">
                    {trendingQueries.map((query, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
                        onClick={() => setSearchQuery(query)}
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="px-4 py-2 glass-card rounded-full text-sm hover:bg-white/10 transition-colors border border-primary/50">
            All Categories
          </button>
          <button className="px-4 py-2 glass-card rounded-full text-sm hover:bg-white/10 transition-colors">
            Price Range
          </button>
          <button className="px-4 py-2 glass-card rounded-full text-sm hover:bg-white/10 transition-colors">
            Ratings 4+
          </button>
          <button className="px-4 py-2 glass-card rounded-full text-sm hover:bg-white/10 transition-colors">
            Available Now
          </button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;