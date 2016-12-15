import React, {Component} from 'react';
import { connect } from 'react-redux';
// import UserInfo from './UserInfo';
import {Link} from 'react-router';

//인덱스 페이지를 제외한 나머지 페이지의 헤더 컴포넌트
//로고, SearchBar, UserInfo 포함

class Header extends Component
{
  render(){
    return (
      <header>
        {this.props.keyword}
        <Link to="/">Logo</Link>
        <Link to="mypage">My Page</Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
    // propname: state.property
  keyword: state.search.queryParams.keyword
});

// mapDispatchToProps({
//   //  propname: actionName
//   request: requestRestaurants
// })

export default connect(mapStateToProps)(Header);