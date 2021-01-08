import React, {Fragment, useEffect} from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getTopPosts } from '../../redux/posts/posts.actions';

import LinkButton from '../../components/LinkButton/LinkButton.component';
import PostItem from '../../components/PostItem/PostItem.component';
// import Spinner from '../../components/Spinner/Spinner.component';

import './HomePage.styles.css';

const HomePage = () => {
    // useEffect(() => {
    //     getTopPosts();
    // }, [ getTopPosts ]);
 const posts = [
     {
        'answer_count': 1,
        'body': "Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the code almost six times faster:",
        'comment_count': 2,
        'created_at': "2021-01-08T04:37:20.000Z",
        'description': "Java is a popular high-level programming language. Use this tag when you&#39;re having problems using or understanding the language itself. This tag is rarely used alone and is most often used in conjunction with [spring], [spring-boot], [jakarta-ee], [android], [javafx], [gradle] and [maven].",
        'id': 4,
        'tag_id': 1,
        'tagname': "java",
        'title': "Why is processing a sorted array faster than processing an unsorted array?",
        'user_id': 3,
        'username': "shubh",
        'views': 3 },
        {
            'answer_count': 1,
            'body': "Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the code almost six times faster:",
            'comment_count': 2,
            'created_at': "2021-01-08T04:37:20.000Z",
            'description': "Java is a popular high-level programming language. Use this tag when you&#39;re having problems using or understanding the language itself. This tag is rarely used alone and is most often used in conjunction with [spring], [spring-boot], [jakarta-ee], [android], [javafx], [gradle] and [maven].",
            'id': 4,
            'tag_id': 1,
            'tagname': "java",
            'title': "Why is processing a sorted array faster than processing an unsorted array?",
            'user_id': 3,
            'username': "shubh",
            'views': 0 },
            {
                'answer_count': 1,
                'body': "Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the code almost six times faster:",
                'comment_count': 2,
                'created_at': "2021-01-08T04:37:20.000Z",
                'description': "Java is a popular high-level programming language. Use this tag when you&#39;re having problems using or understanding the language itself. This tag is rarely used alone and is most often used in conjunction with [spring], [spring-boot], [jakarta-ee], [android], [javafx], [gradle] and [maven].",
                'id': 4,
                'tag_id': 1,
                'tagname': "java",
                'title': "Why is processing a sorted array faster than processing an unsorted array?",
                'user_id': 3,
                'username': "shubh",
                'views': 3 },
                {
                    'answer_count': 1,
                    'body': "Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the code almost six times faster:",
                    'comment_count': 2,
                    'created_at': "2021-01-08T04:37:20.000Z",
                    'description': "Java is a popular high-level programming language. Use this tag when you&#39;re having problems using or understanding the language itself. This tag is rarely used alone and is most often used in conjunction with [spring], [spring-boot], [jakarta-ee], [android], [javafx], [gradle] and [maven].",
                    'id': 4,
                    'tag_id': 1,
                    'tagname': "java",
                    'title': "Why is processing a sorted array faster than processing an unsorted array?",
                    'user_id': 3,
                    'username': "shubh",
                    'views': 0 }
    ];
    console.log(posts);
    return  <Fragment>
        <div id='mainbar' className='homepage fc-black-800'>
            <div className='questions-grid'>
                <h3 className='questions-headline'>Top Questions</h3>
                <div className="questions-btn">
                    <LinkButton
                        text={'Ask Question'}
                        link={'/add/question'}
                        type={'s-btn__primary'}
                    />
                </div>
            </div>
            <div className='questions-tabs'>
                <span>{new Intl.NumberFormat('en-IN').format(posts.length)} questions</span>
            </div>
            <div className='questions'>
                {posts.map(post => (
                    // <p>ss</p>
                    <PostItem key={post.id} post={post}/>
                    ))}
            </div>
        </div>
    </Fragment>
};

HomePage.propTypes = {
    getTopPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

// export default connect(mapStateToProps, { getTopPosts })(HomePage);
export default HomePage;