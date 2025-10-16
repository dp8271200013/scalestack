import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogAIAutomation from "@/assets/blog-ai-automation-transform.jpg";
import blogDigitalTransformation from "@/assets/blog-digital-transformation.jpg";
import blogModernWebsite from "@/assets/blog-modern-website.jpg";
import blogSocialMedia from "@/assets/blog-social-media-automation.jpg";
import blogStartupScaleup from "@/assets/blog-startup-scaleup.jpg";
import blogAIChatbots from "@/assets/blog-ai-chatbots.jpg";

const blogPosts = {
  "ai-automation-transform": {
    title: "5 Ways AI Automation Can Transform Your Small Business",
    date: "Jan 15, 2025",
    category: "AI & Automation",
    readTime: "2 min read",
    image: blogAIAutomation,
    content: `
      <h2>Introduction</h2>
      <p>Artificial intelligence and automation are no longer just for large corporations. Small businesses can now leverage these powerful tools to save time, reduce costs, and scale their operations efficiently. Here are five transformative ways AI automation can benefit your business.</p>
      
      <h2>1. Customer Service Automation</h2>
      <p>AI-powered chatbots can handle customer inquiries 24/7, providing instant responses to common questions. This frees up your team to focus on complex issues while ensuring customers always get timely support.</p>
      
      <h2>2. Marketing Automation</h2>
      <p>From email campaigns to social media posting, AI can automate repetitive marketing tasks. Smart algorithms can even optimize send times and personalize content based on customer behavior, increasing engagement rates significantly.</p>
      
      <h2>3. Data Analysis and Insights</h2>
      <p>AI tools can process vast amounts of data in seconds, identifying patterns and trends that would take humans hours or days to uncover. This enables data-driven decision making without requiring a dedicated analytics team.</p>
      
      <h2>4. Inventory and Operations Management</h2>
      <p>Automated systems can predict inventory needs, optimize supply chains, and streamline operations. This reduces waste, prevents stockouts, and ensures your business runs smoothly.</p>
      
      <h2>5. Financial Processing</h2>
      <p>AI can automate invoicing, expense tracking, and financial reporting. This reduces errors, saves time on bookkeeping, and provides real-time insights into your business's financial health.</p>
      
      <h2>Getting Started</h2>
      <p>The key to successful AI automation is starting small. Identify one or two areas where automation could have the biggest impact, implement solutions, and gradually expand as you see results. The investment in AI automation typically pays for itself within months through increased efficiency and cost savings.</p>
    `,
  },
  "digital-transformation": {
    title: "The Complete Guide to Business Digitalization in 2025",
    date: "Jan 10, 2025",
    category: "Digital Transformation",
    readTime: "2 min read",
    image: blogDigitalTransformation,
    content: `
      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation is the process of integrating digital technology into all areas of your business. It's not just about using computers—it's about fundamentally changing how you operate and deliver value to customers.</p>
      
      <h2>Why Digitalize in 2025?</h2>
      <p>The business landscape has changed dramatically. Customers expect seamless digital experiences, remote work is now standard, and businesses that don't adapt risk falling behind competitors. Digital transformation is no longer optional—it's essential for survival and growth.</p>
      
      <h2>Key Areas to Focus On</h2>
      <h3>Customer Experience</h3>
      <p>Create omnichannel experiences where customers can interact with your business seamlessly across web, mobile, and physical locations. Use data to personalize interactions and anticipate needs.</p>
      
      <h3>Operations</h3>
      <p>Digitize workflows, automate repetitive tasks, and use cloud-based tools to enable remote collaboration. Modern operations are flexible, efficient, and data-driven.</p>
      
      <h3>Business Model</h3>
      <p>Consider how digital tools can open new revenue streams. Can you offer online services? Create digital products? Reach new markets through e-commerce?</p>
      
      <h2>Essential Digital Tools</h2>
      <p>Start with the basics: a professional website, customer relationship management (CRM) software, digital payment systems, and cloud storage. Build from there based on your specific needs.</p>
      
      <h2>Common Pitfalls to Avoid</h2>
      <p>Don't try to digitalize everything at once. Focus on high-impact areas first. Don't neglect training—your team needs to understand and embrace new tools. And remember, technology is just an enabler; your strategy and customer focus matter most.</p>
    `,
  },
  "modern-website": {
    title: "Why Your Business Needs a Modern Website (And How to Get One)",
    date: "Jan 5, 2025",
    category: "Web Development",
    readTime: "2 min read",
    image: blogModernWebsite,
    content: `
      <h2>Your Website Is Your Digital Storefront</h2>
      <p>In 2025, your website is often the first—and sometimes only—interaction customers have with your business. A professional, modern website isn't a luxury; it's a necessity that directly impacts your bottom line.</p>
      
      <h2>What Makes a Website "Modern"?</h2>
      <h3>Mobile-First Design</h3>
      <p>Over 60% of web traffic comes from mobile devices. Your site must look and work perfectly on phones and tablets, not just desktops.</p>
      
      <h3>Fast Loading Speed</h3>
      <p>Users expect pages to load in under 3 seconds. Slow sites lose visitors and rank lower in search results. Modern websites are optimized for speed.</p>
      
      <h3>Clear Call-to-Actions</h3>
      <p>Every page should guide visitors toward taking action—whether that's booking a consultation, making a purchase, or contacting you.</p>
      
      <h3>Professional Design</h3>
      <p>Clean, contemporary design builds trust. Outdated websites signal that your business might be outdated too.</p>
      
      <h2>Essential Features</h2>
      <ul>
        <li>SSL certificate (https) for security</li>
        <li>Contact forms that actually work</li>
        <li>Integration with your business tools (CRM, scheduling, etc.)</li>
        <li>Analytics to understand visitor behavior</li>
        <li>SEO optimization for search visibility</li>
      </ul>
      
      <h2>Getting Your Website Built</h2>
      <p>You have options: DIY website builders, hiring a freelancer, or working with an agency. The right choice depends on your budget, timeline, and technical needs. The key is ensuring your website is professional, fast, and aligned with your business goals.</p>
    `,
  },
  "social-media-automation": {
    title: "Social Media Automation: Work Smarter, Not Harder",
    date: "Dec 28, 2024",
    category: "Social Media",
    readTime: "2 min read",
    image: blogSocialMedia,
    content: `
      <h2>The Social Media Time Trap</h2>
      <p>Social media is essential for business growth, but it can consume hours of your day. Posting consistently, engaging with followers, and tracking performance across multiple platforms is overwhelming. That's where automation comes in.</p>
      
      <h2>What Can Be Automated?</h2>
      <h3>Content Scheduling</h3>
      <p>Create a week's or month's worth of posts in one sitting, then schedule them to go out at optimal times. Your content flows consistently even when you're busy running your business.</p>
      
      <h3>Cross-Platform Posting</h3>
      <p>Write once, publish everywhere. Automation tools can adapt your content for different platforms and post simultaneously, saving hours of repetitive work.</p>
      
      <h3>Analytics Reporting</h3>
      <p>Get automated reports showing what's working and what's not. No more manually checking each platform's analytics dashboard.</p>
      
      <h3>First-Level Engagement</h3>
      <p>Automated responses can handle common inquiries instantly, with more complex questions routed to your team.</p>
      
      <h2>What Shouldn't Be Automated</h2>
      <p>Don't automate everything. Genuine engagement, community building, and responding to customer concerns should remain personal. Use automation for the repetitive tasks so you have time for meaningful interactions.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Batch create content when you're in a creative flow</li>
        <li>Schedule posts for when your audience is most active</li>
        <li>Review scheduled content regularly to ensure it's still relevant</li>
        <li>Monitor mentions and messages daily—automation should supplement, not replace, your presence</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Start with one platform and basic scheduling. As you get comfortable, expand to more platforms and advanced features. The time you save will quickly justify any investment in automation tools.</p>
    `,
  },
  "startup-scaleup": {
    title: "From Startup to Scale-Up: Digital Tools That Matter",
    date: "Dec 20, 2024",
    category: "Business Growth",
    readTime: "2 min read",
    image: blogStartupScaleup,
    content: `
      <h2>The Scale-Up Challenge</h2>
      <p>Moving from startup to scale-up is exciting—and challenging. What worked when you had 5 customers won't work with 500. You need systems and tools that can grow with you without breaking your budget or requiring a huge team.</p>
      
      <h2>Foundation Tools (Get These First)</h2>
      <h3>Customer Relationship Management (CRM)</h3>
      <p>Track every customer interaction, automate follow-ups, and never lose a lead in email chaos. A good CRM pays for itself by preventing lost opportunities.</p>
      
      <h3>Project Management</h3>
      <p>As your team grows, coordinating work becomes complex. Project management tools keep everyone aligned and productive.</p>
      
      <h3>Financial Management</h3>
      <p>Proper bookkeeping and financial tracking are non-negotiable. Modern tools make it easy to stay on top of cash flow and prepare for tax time.</p>
      
      <h2>Growth Tools</h2>
      <h3>Marketing Automation</h3>
      <p>Scale your marketing without scaling your team. Automated email campaigns, social media scheduling, and analytics help you reach more customers efficiently.</p>
      
      <h3>Customer Support</h3>
      <p>Help desk software and chatbots ensure customers get timely support even as volume increases.</p>
      
      <h3>Analytics and Business Intelligence</h3>
      <p>Make data-driven decisions with tools that show what's working and what needs adjustment.</p>
      
      <h2>Integration Is Key</h2>
      <p>The real power comes from tools working together. Your CRM should talk to your email marketing. Your e-commerce platform should sync with your accounting. Look for tools with strong integration capabilities or use automation platforms to connect them.</p>
      
      <h2>Building Your Tech Stack</h2>
      <p>Start with the foundation tools that solve your biggest pain points. Add growth tools as you scale. Choose platforms that can grow with you—switching tools later is expensive and disruptive. Invest in training so your team actually uses these tools effectively.</p>
    `,
  },
  "ai-chatbots": {
    title: "Understanding AI Chatbots: Your 24/7 Customer Service Solution",
    date: "Dec 15, 2024",
    category: "AI & Automation",
    readTime: "2 min read",
    image: blogAIChatbots,
    content: `
      <h2>What Are AI Chatbots?</h2>
      <p>AI chatbots are automated conversational agents that can interact with customers through text or voice. Unlike simple scripted bots, modern AI chatbots use natural language processing to understand context and provide intelligent, helpful responses.</p>
      
      <h2>Why Businesses Need Chatbots</h2>
      <h3>24/7 Availability</h3>
      <p>Customers expect instant responses, even outside business hours. Chatbots never sleep, ensuring someone is always available to help.</p>
      
      <h3>Handle High Volume</h3>
      <p>One chatbot can handle unlimited conversations simultaneously. During busy periods or promotional campaigns, you won't lose customers to long wait times.</p>
      
      <h3>Consistent Quality</h3>
      <p>Every customer gets accurate, consistent information. No more inconsistent answers from different team members.</p>
      
      <h3>Cost Efficiency</h3>
      <p>Reduce support costs by automating responses to common questions. Your human team can focus on complex issues that truly need personal attention.</p>
      
      <h2>What Can Chatbots Do?</h2>
      <ul>
        <li>Answer frequently asked questions</li>
        <li>Help customers find products or services</li>
        <li>Schedule appointments</li>
        <li>Process simple transactions</li>
        <li>Collect customer information</li>
        <li>Provide order status updates</li>
        <li>Troubleshoot common issues</li>
      </ul>
      
      <h2>When to Escalate to Humans</h2>
      <p>Good chatbots know their limits. Complex problems, upset customers, and nuanced situations should be smoothly handed off to human agents. The best customer service combines AI efficiency with human empathy.</p>
      
      <h2>Implementing Chatbots</h2>
      <p>Start by identifying the most common questions your team answers. These are perfect for automation. Choose a chatbot platform that integrates with your existing tools. Train your bot with real customer conversations. Monitor performance and continuously improve responses based on what works.</p>
      
      <h2>The Future Is Conversational</h2>
      <p>As AI improves, chatbots will handle increasingly complex interactions. Businesses that embrace this technology now will be ahead of the curve, delivering better customer experiences while operating more efficiently.</p>
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-page-enter">
      {/* Hero Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Card */}
          <div className="bg-card rounded-lg shadow-card p-8 sm:p-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="inline-flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-accent/20 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can help you implement these strategies.
                </p>
                <Link to="/contact">
                  <Button size="lg">Book a Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Spacing */}
      <div className="h-20" />
    </div>
  );
}
