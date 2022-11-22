import { Component } from 'react';
import logo from "../../src/images/Leetcode.png"

export default class Navbar extends Component {
    render() {
        return (
            <>
                {/* ====================NAVBAR starts here===================== */}
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#"><img src={logo}></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-2">
                            <button type="button" class="btn btn-outline-dark">Login</button>
                        </li>
                        <li class="nav-item px-2">
                            <p>Or</p>
                        </li>
                        <li class="nav-item px-2">
                            <button type="button" class="btn btn-outline-dark">Sign up</button>
                        </li>
                    </ul>
                </nav>
                {/* ====================NAVBAR ends here===================== */}
            </>
        );
    }
}
