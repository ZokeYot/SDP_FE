import { Routes } from '@angular/router';
import { RegisterComponent } from './section/register/register.component';
import { LoginComponent } from './section/login/login.component';
import { ProfileComponent } from './section/profile/profile.component';
import { FindComponent } from './section/find/find.component';
import { PasswordComponent } from './section/password/password.component';
import { UpdateComponent } from './section/update/update.component';
import { roleGuard } from './guard/role.guard';
import { Role } from './model/role';
import { QuizListComponent } from './section/lectuerer/quiz-list/quiz-list.component';
import { MaterialListComponent } from './section/lectuerer/material-list/material-list.component';
import { MaterialDetailsComponent } from './section/lectuerer/material-details/material-details.component';
import { CreateQuizComponent } from './section/lectuerer/create-quiz/create-quiz.component';
import { ConversationComponent } from './section/conversation/conversation.component';
import { LecMainPageComponent } from './section/lectuerer/lec-main-page/lec-main-page.component';

export const routes: Routes = [
    { path: "register", component: RegisterComponent },
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "", component: RegisterComponent },
    { path: "find", component: FindComponent },
    { path: "password", component: PasswordComponent },
    { path: "profile", component: ProfileComponent },
    { path: "lec-main", component: LecMainPageComponent},
    { path: "update", component: UpdateComponent },
    { path: "", component: RegisterComponent },
    { path: "conversation", component: ConversationComponent },
    { path: 'quiz', component: QuizListComponent },
    { path: 'materials', component: MaterialListComponent },
    { path: 'material-details/:title/:filename/:date', component: MaterialDetailsComponent },
    { path: 'create-quiz', component: CreateQuizComponent }
]
