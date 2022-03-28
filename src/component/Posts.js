import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePosts from "../custom-hooks/usePosts";
import "../css/Posts.css"


function GridViewBlogPost ({posts}) {
  const [runOnce, setRunOnce] = useState(true)
  console.log(posts)
  return posts.map((post, index) => {
    const { title, slug, description, featureImage, dateTime, body  } = post.fields

    const blogPreview = () => (
        <>
          <div className="BlogPreview__thumbnail">
            <img class="BlogPreview__thumbnail__image" src ={featureImage.fields.file.url} alt={featureImage.fields.title}/>
          </div>
          <div className="BlogPreview__summary">
            {title && (
              <h2 className="BlogPreview__title">
                {title}
              </h2>
            )}
            {description && <p className="BlogPreview__excerpt">{description}</p>}
            <div className="BlogPreview__read-more">
              Read More
            </div>
          </div>
        </>
      );

    return (
      <>
        {index == 0 &&
          (
            <Link
              key={slug}
              to={slug}
              style={{ textDecoration: 'none' }}
            >
              <div className='BlogHome__main-post'>
                <div className='BlogHome__container'>
                  <div className="BlogPreview BlogPreview--1">
                    {blogPreview()}
                  </div>
                  <span class="BlogHome__full-post-link bold">Most Recent </span>
                </div>
              </div>
            </Link>
          )
        }
        { index > 0 && 
          (
            <div className='BlogHome__section-list' key={index}>
              <div className='BlogHome__container BlogHome__container__2'>
                <Link key={slug}
                  to={slug}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="BlogPreview BlogPreview--2">
                    {blogPreview()}
                  </div>
                </Link>
              </div>
            </div>
          )
        }
      </>
    );
  })
}

export default function Posts() {
  const [posts, isLoading] = usePosts();
  
    return (
        <div className="BlogHome BlogHome__section-content">
          <div className="BlogHome__container">
            <h1 className="BlogHome__title bold">LendingClub Blog</h1>
          </div>
          <div className="BlogHome__post-list">
            {isLoading && <div> Fetching blogs from CMS </div>}
            {posts && <GridViewBlogPost posts={posts} /> }
          </div>
        </div>
    )
}
