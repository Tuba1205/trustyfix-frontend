import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './BlogDetail.css';

const blogPosts = {
  'diy-kitchen-tips': {
    title: '5 Easy DIY Kitchen Maintenance Tips',
    content: `
      Keeping your kitchen in top shape doesn't have to be difficult. Here are 5 tips:<br/><br/>
      1. Clean your sink daily with baking soda and vinegar.<br/>
      2. Check for cabinet hinge looseness every month.<br/>
      3. Deodorize the garbage disposal with lemon ice cubes.<br/>
      4. Wipe down backsplash tiles weekly.<br/>
      5. Inspect appliance cords for wear and tear.<br/><br/>
      By doing these regularly, you avoid costly repairs!
    `,
    image: '/images/kitchen-tips.png'
  },
  'fix-bathroom-leaks': {
    title: 'How to Fix Common Bathroom Leaks',
    content: `
      Bathroom leaks can damage walls, floors, and increase utility bills. Here's how to fix common ones:<br/><br/>
      - <strong>Leaky Faucet</strong>: Replace worn-out washers or cartridges.<br/>
      - <strong>Running Toilet</strong>: Check the flapper or fill valve.<br/>
      - <strong>Shower Head Leak</strong>: Remove mineral build-up with vinegar or use plumbing tape.<br/><br/>
      If unsure, contact a professional — quick fixes save money long-term.
    `,
    image: '/images/bathroom-leak.jpg'
  },
  'electrical-safety': {
    title: 'Electrical Safety Tips for Your Home',
    content: `
      Electricity is essential — and dangerous when mishandled.<br/><br/>
      🔌 Never overload outlets<br/>
      🔌 Keep cords away from water<br/>
      🔌 Use surge protectors<br/>
      🔌 Install GFCI outlets near sinks<br/>
      🔌 Hire certified electricians for upgrades<br/><br/>
      Be smart, stay safe!
    `,
    image: '/images/electrical-safety.jpg'
  }
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogPosts[slug];

  if (!blog) {
    return <div style={{ padding: '20px' }}><h2>Blog not found</h2></div>;
  }

  return (
    <div className="blog-detail">
      <Helmet>
        <title>{blog.title} | FixNest</title>
        <meta name="description" content={blog.content.replace(/<br\/>/g, ' ').slice(0, 150)} />
      </Helmet>

      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-detail-img" />
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
};

export default BlogDetail;
