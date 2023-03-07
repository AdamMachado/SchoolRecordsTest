﻿using MediatR;
using SRD.Core.Commands;
using SRD.Core.Responses;
using SRD.Domain.Login.DTO;
using SRD.Domain.User.Repositories;

namespace SRD.Application.Login.UseCases
{
    public class Login
    {
        public class Command : IRequest<IRequestResponse>
        {
            public LoginDTO LoginDTO { get; set; }
        }

        public class CommandHandler :
            BaseCommandHandler,
            IRequestHandler<Command, IRequestResponse>
        {
            private readonly IUserRepository _userRepository;

            public CommandHandler(IUserRepository userRepository)
            {
                _userRepository = userRepository;
            }

            public async Task<IRequestResponse> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = new Domain.User.Entities.User()
                {
                    Username = "Rafael Cardoso",
                    Password = "123",
                    Email = "rafael@gmail.com"
                };

                _userRepository.Insert(user);

                return await SaveData(_userRepository.UnitOfWork);
            }
        }
    }
}
